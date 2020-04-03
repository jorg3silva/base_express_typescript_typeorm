import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne, ObjectType,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { UserRoles } from './UserRoles';
import config from './../config';


@Index('fk_business_accounts_created_by', ['createdBy'], {})
@Entity('business_accounts', { schema: config.db.name })
export class BusinessAccounts {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'name', length: 255 })
    name: string;

    @Column('int', { name: 'created_by' })
    createdBy: number;

    @Column('datetime', {
        name: 'created_at',
        default: (): string => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('int', { name: 'updated_by' })
    updatedBy: number;

    @ManyToOne(
        (): ObjectType<Users> => Users,
        (users: Users): BusinessAccounts[] => users.businessAccounts,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
    )
    @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
    createdBy2: Users;

    @OneToMany(
        ():ObjectType<UserRoles> => UserRoles,
        (userRoles: UserRoles): BusinessAccounts => userRoles.idBusinessAccount2,
    )
    userRoles: UserRoles[];
}
