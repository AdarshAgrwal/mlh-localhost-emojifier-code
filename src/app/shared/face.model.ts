export type FaceModel = {
    faceRectangle: {
        height: number;
        width: number;
        left: number;
        top: number;
    };
    faceAttributes: {
        emotion: object;
    }
};
