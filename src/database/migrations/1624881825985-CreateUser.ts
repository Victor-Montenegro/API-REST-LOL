import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1624881825985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(
            new Table({ 
                name: "User",
                columns: [
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar"
                    }

                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("User");
    }

}
