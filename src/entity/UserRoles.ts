import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    ObjectType,
} from 'typeorm';
import { BusinessAccounts } from './BusinessAccounts';
import { Users } from './Users';
import { Roles } from './Roles';
import config from './../config';


@Index('fk_user_rol_user_id', ['idUser'], {})
@Index('fk_user_rol_rol_id', ['idRol'], {})
@Index('fk_user_rol_business_account_id', ['idBusinessAccount'], {})
@Index('fk_user_rol_created_by', ['createdBy'], {})
@Entity('user_roles', { schema: config.db.name })
export class UserRoles {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('int', { name: 'id_rol' })
    idRol: number;

    @Column('int', { name: 'id_user' })
    idUser: number;

    @Column('int', { name: 'id_business_account' })
    idBusinessAccount: number;

    @Column('datetime', {
        name: 'created_at',
        default: (): string => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column('int', { name: 'created_by' })
    createdBy: number;

    @Column('tinyint', {
        name: 'softdelete',
        nullable: true,
        width: 1,
        default: ():string => '0',
    })
    softdelete: boolean | null;

    @ManyToOne(
        (): ObjectType<BusinessAccounts> => BusinessAccounts,
        (businessAccounts: BusinessAccounts): UserRoles[] => businessAccounts.userRoles,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
    )
    @JoinColumn([{ name: 'id_business_account', referencedColumnName: 'id' }])
    idBusinessAccount2: BusinessAccounts;

    @ManyToOne(
        (): ObjectType<Users> => Users,
        (users: Users): UserRoles[] => users.userRoles,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
    )
    @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
    createdBy2: Users;

    @ManyToOne(
        (): ObjectType<Roles> => Roles,
        (roles: Roles): UserRoles[]  => roles.userRoles,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
    )
    @JoinColumn([{ name: 'id_rol', referencedColumnName: 'id' }])
    idRol2: Roles;

    @ManyToOne(
        (): ObjectType<Users> => Users,
        (users: Users): UserRoles[] => users.userRoles2,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
    )
    @JoinColumn([{ name: 'id_user', referencedColumnName: 'id' }])
    idUser2: Users;
}
