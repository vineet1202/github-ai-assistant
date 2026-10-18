package com.vineet.backend.service.ai;

import java.util.List;

import com.vineet.backend.dto.CitationDto;

public record RetrievedContext(
        List<CitationDto> citations,
        String contextText) {
}
