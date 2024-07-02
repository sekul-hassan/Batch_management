const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => {
    const year = currentYear - index;
    const nextYear = year + 1;
    return `${year}-${nextYear.toString().slice(2)}`;
});

const createBatchForm = [
    {
        "label": "Enter batch name",
        "type": "text",
        "name": "name",
        "placeholder": "Batch Name",
        "required": true
    },
    {
        "label": "Enter an email for batch",
        "type": "email",
        "name": "email",
        "placeholder": "Batch email",
        "required": true
    },
    {
        "label": "Enter password",
        "type": "password",
        "name": "password",
        "placeholder": "Password",
        "required": true
    },
    {
        "label": "Select academic session",
        "type": "select",
        "name": "session",
        "option": years.map((year, index) => ({
            id: index,
            value: year
        }))
    },
    {
        "label": "Upload a profile pic",
        "type": "file",
        "name": "profilePic",
        "required": true
    },
    {
        "label": "Upload a cover photo",
        "type": "file",
        "name": "coverPic",
        "required": true
    }
];

export default createBatchForm;
