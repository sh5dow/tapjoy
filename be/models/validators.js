var wsMessageValidator = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "line": {"type": "number"},
            "text": {"type": "string"}
        },
        "required": ["line", "text"]
    }
};

module.exports = {
    wsMessageValidator
}
