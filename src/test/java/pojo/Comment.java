package pojo;

import com.google.gson.GsonBuilder;

public final class Comment {
    private final String body;
    private final Integer postId;

    public Comment(String body, Integer postId) {
        this.body = body;
        this.postId = postId;
    }

    public String toStringJson() {
        return new GsonBuilder().create().toJson(this);
    }
}
