package pojo;

import com.google.gson.GsonBuilder;

public final class Post {
    private final String title;
    private final String author;

    public Post(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String toStringJson() {
        return new GsonBuilder().create().toJson(this);
    }
}
