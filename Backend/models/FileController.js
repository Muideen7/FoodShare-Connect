/* eslint-disable */
import dbClient from '../storage/db';

const { ObjectId } = require('mongodb');

export default class FileController {
  static async postFile(req, res) {
    // method for uploading a new image file by a Business
    res.status(400).json({'message': 'Upload files'})

  }
}
