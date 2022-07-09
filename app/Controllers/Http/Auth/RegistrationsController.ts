import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ParentValidator from 'App/Validators/Auth/Registration/ParentValidator';
import StudentValidator from 'App/Validators/Auth/Registration/StudentValidator';
import TutorValidator from 'App/Validators/Auth/Registration/TutorValidator';

import Registration from 'App/Mongoose/Models/Auth/Registration';

export default class RegistrationsController {

  public async index({ request, response }: HttpContextContract) {

    let payload = {}

    try {

      console.log("--- before ---")

      switch (request.input('type')) {
        case "Tutor":
          payload = await request.validate(TutorValidator);
          break;
        case "Student":
          payload = await request.validate(StudentValidator);
          break;
        case "Parent":
          payload = await request.validate(ParentValidator);
          break;
        default:
          payload = await request.validate(StudentValidator);
          break;
      }

      console.log("--- after ---")

      // return payload;
      try {
        const registration = new Registration(payload)

        await registration.save().then(() => console.log("Registration saveed into database"));

        console.log(registration);

        return response.status(200).json({
          success: true,
          message: "Registration saveed into database",
          data: registration
        })

      } catch (error) {
        response.status(200).json({
          success: false,
          message: error.message,
          data: null
        })
      }


    } catch (error) {
      console.log(error.flashToSession)
      console.log(error.message)
      console.log(error.messages)
      console.log(error.messages.errors)

      response.status(200).json({
        'status': false,
        'message': "Request validation errors",
        'hasErrors': true,
        'errors': error.messages?.errors,
        'data': null
      })
    }

    //  return [{ name: "hello" }, 22];

    // try {
    //   const registration = new Registration(payload)

    //   await registration.save().then(() => console.log("Registration saveed into database"));

    //   console.log(registration);

    //   response.status(200).json({
    //     success: false,
    //     message: "Registration saveed into database",
    //     data: registration
    //   })

    // } catch (error) {
    //   response.status(200).json({
    //     success: false,
    //     message: error,
    //     data: null
    //   })
    // }

  }

}
