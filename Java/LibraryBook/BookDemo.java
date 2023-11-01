package LibraryBook;

public class BookDemo {
    public static void main(String[] args) {
        Library library = new Library();
        library.addBook("JAVA","KLU");
        library.addBook("C++","KLU");

        LibraryMember m = new LibraryMember();

        m.borrowBook(library.books.get(0));

        library.displayBooks();
    }
}
