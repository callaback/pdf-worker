## pdf.callaback.com

- pdf.callaback.com/?name=callaback
<img width="672" height="869" alt="Screenshot 2026-01-24 at 02 21 46" src="https://github.com/user-attachments/assets/9008b237-15a9-4cad-8423-c9570db3a0d9" />


A Cloudflare Worker that generates PDFs from either custom certificates or website snapshots using Puppeteer.

## Features

-   📄 Generate beautiful certificates with custom names
    
-   🌐 Create PDF snapshots of any website
    
-   ⚡ Fast deployment on Cloudflare's global network
    
-   🔧 Simple query parameter interface
    
-   🎨 Proper styling and formatting
    

## Quick Start

### Basic Usage

text

https://browser-worker.callaback.workers.dev/?name=John%20Doe

### Generate Certificate

Create a custom certificate PDF with any name:

text

https://browser-worker.callaback.workers.dev/?name=YourNameHere

Examples:

-   `/?name=John%20Doe`
    
-   `/?name=Jane%20Smith`
    
-   `/?name=Alice%20Johnson`
    

### Generate Website Snapshot

Create a PDF snapshot of any website:

text

https://browser-worker.callaback.workers.dev/?url=https://example.com

Examples:

-   `/?url=https://jessejesse.com`
    
-   `/?url=https://news.ycombinator.com`
    
-   `/?url=https://github.com`
    

### Short URL Format

You can use URLs without the `https://` prefix:

text

https://browser-worker.callaback.workers.dev/?url=twitter.com

Examples:

-   `/?url=twitter.com`
    
-   `/?url=google.com`
    
-   `/?url=wikipedia.org`
    

## Advanced Usage

### Combining with Other PDF Options

While the basic version supports simple PDF generation, you can extend it with these additional parameters:

#### Format Options

text

/?url=https://example.com&format=Letter
/?url=https://example.com&format=A3
/?url=https://example.com&format=Legal

Available formats: `A0-A6`, `Letter`, `Legal`, `Tabloid`, `Ledger`

#### Landscape Mode

text

/?url=https://example.com&landscape=true

#### Custom Margins

text

/?url=https://example.com&margin=20mm

#### Scale Factor

text

/?url=https://example.com&scale=0.8

#### Full Page Capture

text

/?url=https://example.com&fullPage=true

## Examples Collection

### Certificate Examples

bash

# Basic certificate
https://browser-worker.callaback.workers.dev/?name=John%20Doe

# Certificate with spaces/special characters
https://browser-worker.callaback.workers.dev/?name=Dr.%20Jane%20Smith%20PhD

# Multiple words
https://browser-worker.callaback.workers.dev/?name=The%20Quick%20Brown%20Fox

### Website Snapshot Examples

bash

# Social Media
https://browser-worker.callaback.workers.dev/?url=https://twitter.com
https://browser-worker.callaback.workers.dev/?url=https://linkedin.com

# News & Information
https://browser-worker.callaback.workers.dev/?url=https://nytimes.com
https://browser-worker.callaback.workers.dev/?url=https://wikipedia.org

# Tech & Development
https://browser-worker.callaback.workers.dev/?url=https://github.com
https://browser-worker.callaback.workers.dev/?url=https://stackoverflow.com
https://browser-worker.callaback.workers.dev/?url=https://dev.to

# Cloudflare Ecosystem
https://browser-worker.callaback.workers.dev/?url=https://developers.cloudflare.com
https://browser-worker.callaback.workers.dev/?url=https://workers.cloudflare.com

# Documentation
https://browser-worker.callaback.workers.dev/?url=https://puppeteer.dev

### Advanced Examples

bash

# Landscape PDF of Twitter
https://browser-worker.callaback.workers.dev/?url=twitter.com&landscape=true

# Letter format PDF of GitHub
https://browser-worker.callaback.workers.dev/?url=github.com&format=Letter

# Scaled down PDF (80% size)
https://browser-worker.callaback.workers.dev/?url=wikipedia.org&scale=0.8

# Full page capture (captures entire page, not just viewport)
https://browser-worker.callaback.workers.dev/?url=nytimes.com&fullPage=true

## Error Handling

The worker provides helpful error messages:

-   **No parameters**: Shows usage instructions
    
-   **Invalid URL**: Attempts to add `https://` prefix
    
-   **Page load failure**: Returns descriptive error message
    
-   **Timeout**: 30-second timeout for page loading
    

## Response Headers

All PDF responses include:

-   `Content-Type: application/pdf`
    
-   `Content-Disposition: inline; filename="[name].pdf"`
    

Filenames are automatically generated:

-   Certificates: `certificate-[name].pdf`
    
-   Website snapshots: `snapshot-[domain].pdf`
