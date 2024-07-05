export const extractNumbers = (data) => {
    let value = data?.replace("+", "");
    if (value.includes("k")) {
        value = value.replace("k", "");
    }
    return parseInt(value, 10);
};

export const extractValues = (data) => {
    let value = "";
    if (data.includes("+")) {
        value = "+";
    }
    if (data.includes("k")) {
        value = "k";
    }
    if (data.includes("k+")) {
        value = "k+";
    }
    return value;
};
