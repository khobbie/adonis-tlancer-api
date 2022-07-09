import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Env from '@ioc:Adonis/Core/Env'
import { Mongoose } from 'mongoose'

//

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class MongoProvider {
  constructor(protected app: ApplicationContract) { }

  public async register() {
    // Register your own bindings

    console.log(Env.get('MONGO_URL'));

    // Create new Mongoose instance
    const mongoose = new Mongoose()

    // Connect the instance to DB
    await mongoose
      .connect(Env.get('MONGO_URL'))
      .then(() => console.log("connected"))
      .catch((e) => console.log(e));
    // Attach it to IOC container as singleton
    this.app.container.singleton("Mongoose", () => mongoose);
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
    await this.app.container.use('Mongoose').disconnect()
  }
}
