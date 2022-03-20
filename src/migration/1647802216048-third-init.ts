import {MigrationInterface, QueryRunner} from "typeorm";

export class thirdInit1647802216048 implements MigrationInterface {
    name = 'thirdInit1647802216048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news" RENAME COLUMN "home" TO "id_home"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news" RENAME COLUMN "id_home" TO "home"`);
    }

}
