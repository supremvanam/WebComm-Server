import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  orm.getMigrator().up();
  const post = orm.em.fork({}).create(Post, { title: "My second post" });

  await orm.em.persistAndFlush(post);
};

main().catch((e) => console.error(e));
