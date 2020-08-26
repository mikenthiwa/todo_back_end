import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(morgan('combined'));
    app.use('*', (req, res) => {
        res.status(400).json({
            success: false,
            message: 'Not found'
        })
    });

    return app;
};