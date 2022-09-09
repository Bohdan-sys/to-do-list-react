export const CreateUid = () => {
    return Math.random().toString(36).replace('0.', '');
};