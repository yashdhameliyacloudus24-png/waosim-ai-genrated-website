import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

// This would typically come from a CMS or database
const blogPosts = {
  "top-10-esim-destinations-2024": {
    title: "Top 10 Travel Destinations with Best eSIM Coverage in 2024",
    excerpt:
      "Discover the world's most connected destinations where your eSIM will work flawlessly. From bustling cities to remote islands, these locations offer excellent network coverage.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "/travel-destinations-world-map.jpg",
    content: `
      <p>In today's connected world, staying online while traveling is no longer a luxury—it's a necessity. Whether you're a digital nomad, business traveler, or vacation enthusiast, having reliable internet access can make or break your travel experience.</p>

      <p>eSIM technology has revolutionized how we stay connected abroad, eliminating the need for physical SIM cards and providing instant connectivity. However, not all destinations are created equal when it comes to eSIM coverage and network quality.</p>

      <h2>1. Singapore</h2>
      <p>Singapore leads the pack with exceptional 5G coverage and multiple carrier options. The city-state's advanced telecommunications infrastructure ensures blazing-fast speeds throughout the island.</p>

      <h2>2. South Korea</h2>
      <p>Home to some of the world's fastest internet speeds, South Korea offers excellent eSIM coverage with widespread 5G availability in major cities like Seoul and Busan.</p>

      <h2>3. Japan</h2>
      <p>Japan's extensive network coverage reaches even remote areas, making it perfect for travelers exploring both urban centers and rural regions. Major carriers offer comprehensive eSIM support.</p>

      <h2>4. United Kingdom</h2>
      <p>The UK provides reliable coverage across England, Scotland, Wales, and Northern Ireland. London, in particular, offers excellent connectivity for business travelers.</p>

      <h2>5. Germany</h2>
      <p>As Europe's economic powerhouse, Germany boasts robust network infrastructure with good coverage in both cities and countryside areas.</p>

      <h2>6. United States</h2>
      <p>With multiple major carriers supporting eSIM, the US offers extensive coverage across all 50 states, though rural areas may have varying signal strength.</p>

      <h2>7. Australia</h2>
      <p>Australia's major cities provide excellent eSIM coverage, with improving connectivity in regional areas. Perfect for both business and leisure travelers.</p>

      <h2>8. Netherlands</h2>
      <p>The Netherlands offers comprehensive coverage in this compact country, with excellent speeds in Amsterdam, Rotterdam, and other major cities.</p>

      <h2>9. Switzerland</h2>
      <p>Despite its mountainous terrain, Switzerland provides surprisingly good coverage even in alpine regions, making it ideal for adventure travelers.</p>

      <h2>10. United Arab Emirates</h2>
      <p>The UAE, particularly Dubai and Abu Dhabi, offers world-class connectivity with extensive 5G networks and multiple eSIM-compatible carriers.</p>

      <h2>Tips for Choosing the Right eSIM Plan</h2>
      <p>When selecting an eSIM plan for these destinations, consider factors like data allowance, validity period, and network coverage. Always check compatibility with your device before traveling.</p>

      <p>Remember that network performance can vary within countries, so it's wise to research specific regions you'll be visiting. With the right eSIM plan, you can enjoy seamless connectivity in any of these top destinations.</p>
    `,
  },
  // Add more blog posts here...
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found - WaoSim Blog",
    }
  }

  return {
    title: `${post.title} - WaoSim Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostClientPage params={params} />
}
