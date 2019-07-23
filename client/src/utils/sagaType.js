const prefix = "WATCH_SAGA_";
const getSagaType = type => `${prefix}${type}`;
const getReducerType = type => type.replace(prefix, "");

export {
    prefix, getSagaType, getReducerType
}