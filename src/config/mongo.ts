import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/ex-type';

export const connect = () => {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true
    },
    (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Succesfully Connected!');
      }
    }
  );
};