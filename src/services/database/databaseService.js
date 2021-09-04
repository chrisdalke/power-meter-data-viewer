import PouchDB from 'pouchdb';
import { v4 as uuid } from 'uuid';

const batteries = new PouchDB('batteries');

const getBatteries = async () => {
    const rawDocs = await batteries.allDocs({
        include_docs: true
    });
    return rawDocs.rows;
};

const getBattery = (id) => {

};

const createBattery = async (body) => {
    const newBattery = await batteries.put({
        _id: uuid(),
        ...body
    })
    return newBattery;
};

const deleteBattery = async (doc) => {
    return batteries.remove(doc);
};

const deleteAllBatteries = async () => {
    const rows = await getBatteries();
    await Promise.all(rows.map(({ doc }) => {
        return batteries.remove(doc);
    }));
}

const updateBattery = () => {

};

export default {
    getBatteries,
    getBattery,
    createBattery,
    deleteBattery,
    updateBattery,
    deleteAllBatteries
};