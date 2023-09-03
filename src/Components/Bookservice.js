
import axios from "axios";

let id, price;

const urlGet = "http://localhost:8080/getBook";
const urlPost = "http://localhost:8080/addBook";

class Bookservice{
    getBooks(){
        return axios.get(urlGet);
    }
    postBooks(bookData){
        return axios.post(urlPost, bookData);
    }
    updateBooks(bid, bprice){
        id = bid;
        price = bprice;
        return axios.put(`http://localhost:8080/queries/update/price/for${id}to${price}`);
    }
    deleteBook(dbid){
        return axios.delete(`http://localhost:8080/deleteBookId/${dbid}`);
    }
    // getBookById(id){
    //     return axios.get(urlId)
    // }
}

export default new Bookservice();