import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1647541187009 implements MigrationInterface {
    name = 'initDb1647541187009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "table" character varying NOT NULL, "field" character varying NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "login" character varying NOT NULL, "email" character varying, "phone" character varying, "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying, "middlename" character varying, "role" character varying NOT NULL DEFAULT 'Client', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tsz" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "email" character varying, "phone" character varying NOT NULL, CONSTRAINT "PK_f79af665ee284d245db637ff431" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "home" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "city" character varying NOT NULL, "number" character varying NOT NULL, "street" character varying NOT NULL, "tszId" integer, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flat" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "area" integer, "number" integer NOT NULL, "entrance" integer, "homeId" integer, CONSTRAINT "PK_e46676be9ed366f0ff06c1ae6d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "issues" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "priority" character varying, "shared_pool" boolean NOT NULL, "status" character varying NOT NULL DEFAULT 'Created', "flatId" integer, "createdById" integer, "assignedToId" integer, CONSTRAINT "PK_9d8ecbbeff46229c700f0449257" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "issue" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "id_purchase_document" integer NOT NULL, "resolved_by" integer NOT NULL, "priority" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_f80e086c249b9f3f3ff2fd321b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meter" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "meter_type" character varying NOT NULL, "last_value" integer NOT NULL, "installing_date" TIMESTAMP, "checking_date" TIMESTAMP, CONSTRAINT "PK_6a2a722edc5f966fa3562638f91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "title" character varying NOT NULL, "description" character varying NOT NULL, "homeId" integer, "userId" integer, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_document" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "number" integer NOT NULL, "userId" integer, "flatId" integer, CONSTRAINT "PK_ea02c0b431b57239ae33227385d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_tszs_tsz" ("userId" integer NOT NULL, "tszId" integer NOT NULL, CONSTRAINT "PK_9ed0a5acffdf3ce83a4da473b2a" PRIMARY KEY ("userId", "tszId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e921f5ca951014fe50f46170ab" ON "user_tszs_tsz" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_40fd6803b1b197c504bcf05bcf" ON "user_tszs_tsz" ("tszId") `);
        await queryRunner.query(`ALTER TABLE "home" ADD CONSTRAINT "FK_2cf53b5be2346c0b1d031370df5" FOREIGN KEY ("tszId") REFERENCES "tsz"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "flat" ADD CONSTRAINT "FK_d7bbc2c9f2a0b25025d2b8019e2" FOREIGN KEY ("homeId") REFERENCES "home"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issues" ADD CONSTRAINT "FK_eb5436f3d288340ba0d972999dc" FOREIGN KEY ("flatId") REFERENCES "flat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issues" ADD CONSTRAINT "FK_6ec638588b8a31143a6ac931ffa" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "issues" ADD CONSTRAINT "FK_5fbabbdff0ad837779660df588f" FOREIGN KEY ("assignedToId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_8877163df85bea57979372f733d" FOREIGN KEY ("homeId") REFERENCES "home"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_9198b86c4c22bf6852c43f3b44e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_document" ADD CONSTRAINT "FK_5fb28845e9c110e964ae4c83888" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_document" ADD CONSTRAINT "FK_1d272963def002f9ff00185bf2a" FOREIGN KEY ("flatId") REFERENCES "flat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_tszs_tsz" ADD CONSTRAINT "FK_e921f5ca951014fe50f46170abb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_tszs_tsz" ADD CONSTRAINT "FK_40fd6803b1b197c504bcf05bcfd" FOREIGN KEY ("tszId") REFERENCES "tsz"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_tszs_tsz" DROP CONSTRAINT "FK_40fd6803b1b197c504bcf05bcfd"`);
        await queryRunner.query(`ALTER TABLE "user_tszs_tsz" DROP CONSTRAINT "FK_e921f5ca951014fe50f46170abb"`);
        await queryRunner.query(`ALTER TABLE "purchase_document" DROP CONSTRAINT "FK_1d272963def002f9ff00185bf2a"`);
        await queryRunner.query(`ALTER TABLE "purchase_document" DROP CONSTRAINT "FK_5fb28845e9c110e964ae4c83888"`);
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_9198b86c4c22bf6852c43f3b44e"`);
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_8877163df85bea57979372f733d"`);
        await queryRunner.query(`ALTER TABLE "issues" DROP CONSTRAINT "FK_5fbabbdff0ad837779660df588f"`);
        await queryRunner.query(`ALTER TABLE "issues" DROP CONSTRAINT "FK_6ec638588b8a31143a6ac931ffa"`);
        await queryRunner.query(`ALTER TABLE "issues" DROP CONSTRAINT "FK_eb5436f3d288340ba0d972999dc"`);
        await queryRunner.query(`ALTER TABLE "flat" DROP CONSTRAINT "FK_d7bbc2c9f2a0b25025d2b8019e2"`);
        await queryRunner.query(`ALTER TABLE "home" DROP CONSTRAINT "FK_2cf53b5be2346c0b1d031370df5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_40fd6803b1b197c504bcf05bcf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e921f5ca951014fe50f46170ab"`);
        await queryRunner.query(`DROP TABLE "user_tszs_tsz"`);
        await queryRunner.query(`DROP TABLE "purchase_document"`);
        await queryRunner.query(`DROP TABLE "news"`);
        await queryRunner.query(`DROP TABLE "meter"`);
        await queryRunner.query(`DROP TABLE "issue"`);
        await queryRunner.query(`DROP TABLE "issues"`);
        await queryRunner.query(`DROP TABLE "flat"`);
        await queryRunner.query(`DROP TABLE "home"`);
        await queryRunner.query(`DROP TABLE "tsz"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
