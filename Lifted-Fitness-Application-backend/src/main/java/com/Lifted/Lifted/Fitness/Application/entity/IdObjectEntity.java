package com.Lifted.Lifted.Fitness.Application.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class IdObjectEntity {
    private String id;

    public IdObjectEntity(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }


}

