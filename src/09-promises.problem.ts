interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
// How to make sure this async function return a value with type LukeSkyWalker?
export const fetchLukeSkywalker = async (): LukeSkywalker => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};


// https://www.typescripttutorial.net/typescript-tutorial/type-casting/
