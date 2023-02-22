import mongoose from "mongoose";

const persistence = "MONGO";

export let usersService;
// export let Products;
// export let Messages;

switch (persistence) {
    case 'MONGO':
        mongoose.set('strictQuery', false)
        const connection = mongoose.connect("mongodb+srv://carloscogliandro:backendcarlos@cluster0.ng7biv3.mongodb.net/ecommerce?retryWrites=true&w=majority");
        const { default: MongoUser } = await import('./mongodb/UsersContainer.js');
        // const { default: MongoProducts } = await import('./mongodb/productsContainer.js');
        // const { default: MongoMessages } = await import('./mongodb/MessagesContainer.js');
        usersService = new MongoUser();
        // Products = new MongoProducts();
        // Messages = new MongoMessages();
        break;
    case 'FILESYSTEM':
        const { default: FSUser } = await import('./filesystem/UsersContainer.js')
        usersService = new FSUser();
        break;
}

