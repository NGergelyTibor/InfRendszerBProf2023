A GitHub REST API lehetővé teszi az adatok lekérdezését és módosítását a GitHub-on keresztül, és támogatja az alábbi HTTP metódusokat:

GET: Az erőforrások lekérdezésére használt metódus.
POST: Új erőforrások létrehozására használt metódus.
PUT: Az erőforrások módosítására használt metódus.
DELETE: Az erőforrások törlésére használt metódus.
A GitHub API-t használhatjuk többek között a következők lekérdezésére vagy módosítására:

Felhasználók: A felhasználók adatainak lekérdezése és módosítása.
Repository-k: A repository-k adatainak lekérdezése és módosítása.
Issue-ok: Az issue-ok lekérdezése és módosítása.
Pull request-ek: A pull request-ek lekérdezése és módosítása.
Commit-ok: A commit-ok lekérdezése és módosítása.
A GitHub REST API-nak számos verziója létezik, és dokumentációja elérhető a GitHub webhelyén. Az API hívásokat a megfelelő HTTP metódusokkal és útvonalakkal kell elküldeni, és a kívánt adatokat a kérés testében vagy fejlécében kell elküldeni. Az API válaszokat JSON formátumban küldi vissza.

# api.github.com GET
A api.github.com GET egy HTTP GET kérés az api.github.com API végpontjára. Ez a végpont a GitHub nyilvános API-jának fő bejáratát jelenti, és lehetővé teszi a felhasználók számára, hogy különböző GitHub adatokat lekérdezzenek, például felhasználói adatokat, repository-kat, problémákat, pull requesteket és még sok mást.
![sima get](https://i.imgur.com/fkICs3U.png)

# api.github.com/users/NGergelyTibor GET
Az api.github.com/users/NGergelyTibor GET egy HTTP GET kérés az api.github.com API végpontjára, amely a NGergelyTibor GitHub felhasználóhoz tartozó adatait kérdezi le.
![user get](https://i.imgur.com/0fQceKY.png)

# api.github.com/user/repos GET
Az api.github.com/user/repos GET egy HTTP GET kérés az api.github.com API végpontjára, amely a bejelentkezett felhasználóhoz tartozó repository-kat kérdezi le.
![user repos get](https://i.imgur.com/Io2MIY1.png)

# api.github.com/user/repos POST
Az api.github.com/user/repos POST egy HTTP POST kérés az api.github.com API végpontjára, amely a bejelentkezett felhasználóhoz tartozó repository-k létrehozására szolgál.
![user repos post](https://i.imgur.com/lefHeM6.png)

# api.github.com/repos/NGergelyTibor/HelloAPI DELETE
Az api.github.com/repos/NGergelyTibor/HelloAPI DELETE egy HTTP DELETE kérés az api.github.com API végpontjára, amely az NGergelyTibor felhasználó által létrehozott HelloAPI nevű repository törlését kéri.
![user repos delete](https://i.imgur.com/Thsnlzl.png)

