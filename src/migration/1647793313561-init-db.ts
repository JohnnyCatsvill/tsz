import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1647793313561 implements MigrationInterface {
    name = 'initDb1647793313561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "table" character varying NOT NULL, "field" character varying NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "home" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "city" character varying NOT NULL, "number" character varying NOT NULL, "street" character varying NOT NULL, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flat" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "area" integer, "number" integer NOT NULL, "entrance" integer, "homeId" integer, CONSTRAINT "PK_e46676be9ed366f0ff06c1ae6d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "login" character varying NOT NULL, "email" character varying, "phone" character varying, "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying, "middlename" character varying, "role" character varying NOT NULL DEFAULT 'Client', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "issue" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "priority" character varying, "shared_pool" boolean NOT NULL, "status" character varying NOT NULL DEFAULT 'Created', "flatId" integer, "createdById" integer, "assignedToId" integer, CONSTRAINT "PK_f80e086c249b9f3f3ff2fd321b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, "home" integer, "authorId" integer, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meter" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "meter_type" character varying NOT NULL, "last_value" integer NOT NULL, "installing_date" TIMESTAMP, "checking_date" TIMESTAMP, "flatId" integer, "homeId" integer, CONSTRAINT "PK_6a2a722edc5f966fa3562638f91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_document" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "number" integer NOT NULL, "userId" integer, "flatId" integer, CONSTRAINT "PK_ea02c0b431b57239ae33227385d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "flat" ADD CONSTRAINT "FK_d7bbc2c9f2a0b25025d2b8019e2" FOREIGN KEY ("homeId") REFERENCES "home"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issue" ADD CONSTRAINT "FK_081f60a280fe0ffdea9851aa769" FOREIGN KEY ("flatId") REFERENCES "flat"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issue" ADD CONSTRAINT "FK_10b17b49d1ee77e7184216001e0" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issue" ADD CONSTRAINT "FK_533f55df61fc7f8ef741b44300a" FOREIGN KEY ("assignedToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_18ab67e7662dbc5d45dc53a6e00" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meter" ADD CONSTRAINT "FK_dd2bfcf96440e94c67c3eed6aab" FOREIGN KEY ("flatId") REFERENCES "flat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meter" ADD CONSTRAINT "FK_52ef7dac9709ee2e8f47c2cb992" FOREIGN KEY ("homeId") REFERENCES "home"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_document" ADD CONSTRAINT "FK_5fb28845e9c110e964ae4c83888" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_document" ADD CONSTRAINT "FK_1d272963def002f9ff00185bf2a" FOREIGN KEY ("flatId") REFERENCES "flat"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_document" DROP CONSTRAINT "FK_1d272963def002f9ff00185bf2a"`);
        await queryRunner.query(`ALTER TABLE "purchase_document" DROP CONSTRAINT "FK_5fb28845e9c110e964ae4c83888"`);
        await queryRunner.query(`ALTER TABLE "meter" DROP CONSTRAINT "FK_52ef7dac9709ee2e8f47c2cb992"`);
        await queryRunner.query(`ALTER TABLE "meter" DROP CONSTRAINT "FK_dd2bfcf96440e94c67c3eed6aab"`);
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_18ab67e7662dbc5d45dc53a6e00"`);
        await queryRunner.query(`ALTER TABLE "issue" DROP CONSTRAINT "FK_533f55df61fc7f8ef741b44300a"`);
        await queryRunner.query(`ALTER TABLE "issue" DROP CONSTRAINT "FK_10b17b49d1ee77e7184216001e0"`);
        await queryRunner.query(`ALTER TABLE "issue" DROP CONSTRAINT "FK_081f60a280fe0ffdea9851aa769"`);
        await queryRunner.query(`ALTER TABLE "flat" DROP CONSTRAINT "FK_d7bbc2c9f2a0b25025d2b8019e2"`);
        await queryRunner.query(`DROP TABLE "purchase_document"`);
        await queryRunner.query(`DROP TABLE "meter"`);
        await queryRunner.query(`DROP TABLE "news"`);
        await queryRunner.query(`DROP TABLE "issue"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "flat"`);
        await queryRunner.query(`DROP TABLE "home"`);
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
