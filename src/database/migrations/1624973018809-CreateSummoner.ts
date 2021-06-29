import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateSummoner1624973018809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "Summoner",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "NickName",
                        type: "varchar",
                    },
                    {
                        name: "AccountId",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "SummonerLevel",
                        type: "number",
                    },
                    {
                        name: "ProfileIconId",
                        type: "number",
                    },
                    {
                        name: "summonerId",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "userId",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                        {
                            name: "FKUserIdSummoner",
                            referencedTableName: "User",
                            referencedColumnNames: ["id"],
                            columnNames: ["userId"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL",
                        }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("Summoner");
    }

}
