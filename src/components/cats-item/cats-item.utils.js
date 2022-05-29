import { toast } from "react-toastify";
import { writeFavoritesCat } from "../../services/favorites";

export const toogleFavorites = (cat, favoritesCats, setFavoritesCats) => {
  const id = cat.id;
  if (favoritesCats[id]) {
    const { [id]: deleteCat, ...otherCats } = favoritesCats;
    setFavoritesCats(otherCats);
    writeFavoritesCat(otherCats);
    toast.info(`Котик с id: ${id} удален из любимых`);
  } else {
    setFavoritesCats({ [id]: cat, ...favoritesCats });
    writeFavoritesCat({ [id]: cat, ...favoritesCats });
    toast.info(`Новый любимый котик id: ${id} добавлен`);
  }
}
