module.exports = class Data1691321023340 {
    name = 'Data1691321023340'

    async up(db) {
        await db.query(`CREATE TABLE "mint" ("id" character varying NOT NULL, "contract" text NOT NULL, "destination" text NOT NULL, "amount" numeric NOT NULL, "txn_id" character varying, CONSTRAINT "PK_fcaea791104aa41aa11dac29cb2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_afd7a6db0da06f1a2ac598a8ec" ON "mint" ("txn_id") `)
        await db.query(`CREATE INDEX "IDX_a9bbf74e9ec58ac6753ce26e2f" ON "mint" ("contract") `)
        await db.query(`CREATE INDEX "IDX_571fdd685cc2aa9bd82b68b453" ON "mint" ("destination") `)
        await db.query(`CREATE TABLE "transaction_that_caused_mint" ("id" character varying NOT NULL, "block" integer NOT NULL, "hash" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "gas_spent" numeric NOT NULL, CONSTRAINT "PK_b5835b0e27ad6ca1b9c35e373cb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e7ac0729410252c0d782cac2f1" ON "transaction_that_caused_mint" ("block") `)
        await db.query(`CREATE INDEX "IDX_b401f867b45307954f909df109" ON "transaction_that_caused_mint" ("hash") `)
        await db.query(`CREATE INDEX "IDX_826d762ce6aff6a29def4f559d" ON "transaction_that_caused_mint" ("from") `)
        await db.query(`CREATE INDEX "IDX_4f8fe2e84cb537748bcde9d192" ON "transaction_that_caused_mint" ("to") `)
        await db.query(`ALTER TABLE "mint" ADD CONSTRAINT "FK_afd7a6db0da06f1a2ac598a8ecf" FOREIGN KEY ("txn_id") REFERENCES "transaction_that_caused_mint"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "mint"`)
        await db.query(`DROP INDEX "public"."IDX_afd7a6db0da06f1a2ac598a8ec"`)
        await db.query(`DROP INDEX "public"."IDX_a9bbf74e9ec58ac6753ce26e2f"`)
        await db.query(`DROP INDEX "public"."IDX_571fdd685cc2aa9bd82b68b453"`)
        await db.query(`DROP TABLE "transaction_that_caused_mint"`)
        await db.query(`DROP INDEX "public"."IDX_e7ac0729410252c0d782cac2f1"`)
        await db.query(`DROP INDEX "public"."IDX_b401f867b45307954f909df109"`)
        await db.query(`DROP INDEX "public"."IDX_826d762ce6aff6a29def4f559d"`)
        await db.query(`DROP INDEX "public"."IDX_4f8fe2e84cb537748bcde9d192"`)
        await db.query(`ALTER TABLE "mint" DROP CONSTRAINT "FK_afd7a6db0da06f1a2ac598a8ecf"`)
    }
}
