import { Column, Entity, ObjectType, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './UserRoles';
import config from './../config';


@Entity('roles', { schema: config.db.name })
export class Roles {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'name', length: 255 })
    name: string;

    @Column('datetime', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @OneToMany(
        (): ObjectType<UserRoles> => UserRoles,
        (userRoles: UserRoles): Roles  => userRoles.idRol2,
    )
    userRoles: UserRoles[];
}
