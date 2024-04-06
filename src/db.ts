import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://jbotero08:Botero08.@proyectopesca.rn9pxc2.mongodb.net/?retryWrites=true&w=majority&appName=proyectoPesca'; // Reemplaza con tu conexión

mongoose.connect(connectionString)
.then(() => console.log('Database connected successfully'))
.catch(err => console.error(err));

export default mongoose;
