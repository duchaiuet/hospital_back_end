import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import * as moment from 'moment-timezone';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  // @Column({ name: 'password', nullable: false })
  // password: string;

  // @Column({ name: 'refresh_token', nullable: true })
  // refreshToken: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  // @Column({ name: 'jwt_key', nullable: true })
  // jwtKey: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: true,
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: true,
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    transformer: {
      to(value: Date | string | null): string {
        return value instanceof Date ? value.toISOString() : value;
      },
      from(value: string): string {
        return value ? moment(value).format() : null;
      },
    },
  })
  deletedAt: Date;
}