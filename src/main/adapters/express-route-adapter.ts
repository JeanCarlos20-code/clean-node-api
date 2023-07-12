import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const HttpResponse = await controller.handle(httpRequest)
    if (HttpResponse.statusCode === 200) {
      res.status(HttpResponse.statusCode).json(httpRequest.body)
    }
    res.status(HttpResponse.statusCode).json({
      error: HttpResponse.body.message
    })
  }
}
