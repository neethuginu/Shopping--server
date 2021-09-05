const db = require('./db');

const create = (title,description,image) => {
    const newProducts = new db.Products({      
        title,
        description,
        image
    });

    newProducts.save();
    return {
        status: true,
        statusCode: 200,
        message: "succesfully created"
    }   
}

module.exports = {
    create
}
