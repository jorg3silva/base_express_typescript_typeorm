import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import config from './../config';


@Entity('user_credentials', { schema: config.db.name })
export class UserCredentials {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('int', { name: 'user_id' })
    userId: number;

    @Column('int', { name: 'type_credential_id' })
    typeCredentialId: number;

    @Column('varchar', { name: 'password', length: 255 })
    password: string;

    @Column('varchar', { name: 'identifier', length: 255 })
    identifier: string;

    @Column('datetime', {
        name: 'created_at',
        default: ():string => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column('datetime', { name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @Column('tinyint', {
        name: 'softdelete',
        nullable: true,
        width: 1,
        default: ():string => '0',
    })
    softdelete: boolean | null;
}
