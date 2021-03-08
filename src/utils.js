export const collectDocsWithIds = doc => {
    return { id: doc.id, ...doc.data() };
};
