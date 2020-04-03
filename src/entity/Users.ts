import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ObjectType, UpdateDateColumn } from 'typeorm';
import { BusinessAccounts } from './BusinessAccounts';
import { UserRoles } from './UserRoles';
import config from './../config';


@Entity('users', { schema: config.db.name })
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'name', length: 255 })
    name: string;

    @Column('varchar', { name: 'rut', length: 45 })
    rut: string;

    @Column('varchar', { name: 'phone', nullable: true, length: 45 })
    phone: string | null;

    @Column('varchar', { name: 'avatar', nullable: true, length: 255 })
    avatar: string | null;

    @Column('datetime', { name: 'date_birth', nullable: true })
    dateBirth: Date | null;

    @Column('varchar', { name: 'region', nullable: true, length: 255 })
    region: Date | null;

    @Column('varchar', { name: 'city', nullable: true, length: 255 })
    city: Date | null;

    @Column('varchar', { name: 'adress', nullable: true, length: 255 })
    adress: Date | null;

    @Column('datetime', {
        name: 'created_at',
        default: (): string => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('datetime', { name: 'last_conection_at', nullable: true })
    lastConectionAt: Date | null;

    @Column('varchar', { name: 'last_ip', nullable: true, length: 255 })
    lastIp: string | null;

    @Column('tinyint', {
        name: 'confirmed',
        nullable: true,
        width: 1,
        default: (): string => '0',
    })
    confirmed: boolean | null;

    @Column('tinyint', {
        name: 'softdelete',
        nullable: true,
        width: 1,
        default: (): string => '0',
    })
    softdelete: boolean | null;

    @Column('tinyint', {
        name: 'banned',
        nullable: true,
        width: 1,
        default: (): string => '0',
    })
    banned: boolean | null;

    @Column('datetime', {
        name: 'delete_date',
    })
    deleteDate: Date;

    @OneToMany(
        (): ObjectType<BusinessAccounts> => BusinessAccounts,
        (businessAccounts: BusinessAccounts): Users => businessAccounts.createdBy2,
    )
    businessAccounts: BusinessAccounts[];

    @OneToMany(
        (): ObjectType<UserRoles> => UserRoles,
        (userRoles: UserRoles): Users => userRoles.createdBy2,
    )
    userRoles: UserRoles[];

    @OneToMany(
        (): ObjectType<UserRoles> => UserRoles,
        (userRoles: UserRoles): Users => userRoles.idUser2,
    )
    userRoles2: UserRoles[];
}
