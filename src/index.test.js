import unicodeSort from './index';

const EXAMPLE_ARRAY = ["oranges", "apple", "ôranges", "pear", "äpple"];
const EXAMPLE_ARRAY_UPPERCASE = ["Ápriori", 'ôrava', "Circle", "eden"];

const EXAMPLE_ARRAY_MULTI_DIMENSIONAL = [
    {
        name: "Ábel Horák",
    },
    {
        name: "Peter McCalister"
    },
    {
        name: "Gabriel Roth"
    },
    {
        name: "Čávo Malík"
    },
];

test('will sort just casual array', () => {

    const workingArray = [...EXAMPLE_ARRAY];

    workingArray.sort(unicodeSort);

    expect(workingArray.join(" ")).toBe("apple äpple oranges ôranges pear");
});

test('will sort just casual array case insensitive', () => {

    const workingArray = [...EXAMPLE_ARRAY_UPPERCASE];

    workingArray.sort(unicodeSort);

    expect(workingArray.join(" ")).toBe("Ápriori Circle eden ôrava");
});

test('will sort multidimensional array by a key `name`', () => {

    const workingArray = [...EXAMPLE_ARRAY_MULTI_DIMENSIONAL];

    workingArray.sort((a, b) => (
        unicodeSort(a, b, "name")
    ));

    expect(workingArray.map(item => item.name).join(" ")).toBe("Ábel Horák Čávo Malík Gabriel Roth Peter McCalister");
});