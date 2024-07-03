const addSemester = [
    {
        label: "Select a semester",
        type:"select",
        name: "semester",
        option:[
            {id:1, value: "1st year 1st semester"},
            {id:2, value: "1st year 2nd semester"},
            {id:3, value: "2st year 1st semester"},
            {id:4, value: "2st year 2nd semester"},
            {id:5, value: "3rd year 1st semester"},
            {id:6, value: "3rd year 2nd semester"},
            {id:7, value: "4th year 1st semester"},
            {id:8, value: "4th year 2nd semester"},
        ]
    },
    {
        label: "CR name (male)",
        type:"text",
        required: true,
        placeholder: "Beda CR",
        name: "mcrName",
    },
    {
        label: "CR name (female)",
        type:"text",
        required: true,
        placeholder: "Bedi CR",
        name: "fcrName",
    },
    {
        label: "CR photo (male)",
        type:"file",
        required: true,
        placeholder: "Beda CR",
        name: "mcrPhoto",
    },
    {
        label: "CR photo (female)",
        type:"file",
        required: true,
        placeholder: "Bedi CR",
        name: "fcrPhoto",
    },

]

export default addSemester