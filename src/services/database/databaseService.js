import PouchDB from 'pouchdb';

const batteries = new PouchDB('batteries');
PouchDB.debug.enable('*');

const getBatteries = () => {

};

const getBattery = (id) => {

};

const createBattery = () => {

};

const deleteBattery = () => {

};

const updateBattery = () => {

};

export default {
    getBatteries,
    getBattery,
    createBattery,
    deleteBattery,
    updateBattery
};