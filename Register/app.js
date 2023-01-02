// app.get("/", async (req, res) => {
//     const querySnapshot = await firestore.getDocs(User);
//     const list = querySnapshot .docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     res.send(list);
//   });

// app.post("/create", async (req, res) => {
//     const data = req.body;
//     const docRef = await firestore.addDoc(User, {data});
//     res.send({ msg: "User Added" });
// });
