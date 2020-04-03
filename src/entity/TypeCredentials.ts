import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import config from './../config';


@Entity('type_credentials', { schema: config.db.name })
export class TypeCredentials {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'name', length: 255 })
    name: string;

    @Column('datetime', {
        name: 'created_at',
        default: (): string => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column('tinyint', {
        name: 'softdelete',
        nullable: true,
        width: 1,
        default: (): string => '0',
    })
    softdelete: boolean | null;
}
