package LibraryBook;

import java.util.ArrayList;

class Book {
    String title;
    String author;
    Boolean isAvailable;

    Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}


class Library{
    ArrayList<Book> books = new ArrayList<Book>();

    public void addBook(String title, String author){
        books.add(new Book(title, author));
    }

    public void delBook(String t){
        for(int i = 0; i < books.size(); i++){
            if(books.get(i).title.equals(t)){
                books.remove(i);
            }
        }
    }

    public void displayBooks(){
        for(int i = 0; i < books.size(); i++){
            System.out.println(books.get(i).title + " " + books.get(i).author + " " + books.get(i).isAvailable);
        }
    }
}


class LibraryMember{
    Book a;

    public void borrowBook(Book b){
        if(b.isAvailable){
            b.isAvailable = false;
            a = b;
        }
        else{
            System.out.println("Book is not available");
        }
    }

    public void returnBook(){
        a.isAvailable = true;
        a = null;
    }

    public void displayBorrowedBook(){
        if(a != null){
            System.out.println(a.title + " " + a.author);
        }
        else{
            System.out.println("No book borrowed");
        }
    }
}