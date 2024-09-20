import Image from "next/image";

import JohnnieFullPose from "/public/images/anotherme.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={JohnnieFullPose}
              alt="Fullpose of Johnnie"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Frontend developer
            </Link>{" "}
            specializing in React.js and emerging Web3 technologies, dedicated
            to bringing the technical and visual aspects of digital products to
            life. User experience, pixel-perfect design, and writing clear,
            performant code are at the core of my work.
          </Typography>
          <Typography>
            I started my web development journey in 2019, and over the past
            three years, I&apos;ve grown by embracing new challenges and
            mastering the latest technologies. Today, I build cutting-edge web
            applications with React.js, Next.js, TypeScript, Node.js, Web3.js,
            and more.
          </Typography>
          <Typography>
            As a progressive thinker, I thrive in full-cycle product
            development, from ideation to deployment. My experience spans
            everything from enhancing organizational software to crafting Web3
            applications. I focus on bridging design and functionality to create
            visually appealing, intuitive, and accessible projects.
          </Typography>
          <Typography>
            When I&apos;m not coding, I explore Web3 trends, collaborate with
            fellow developers, and work on personal projects that push my
            skills. I&apos;m driven by a desire to innovate, whether it&apos;s optimizing
            dApp performance or implementing secure payment systems. You can
            find me on Twitter sharing tech insights or on GitHub, where I build
            in public.
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{" "}
            where I share tech-related bites and build in public, or you can
            follow me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Certified in Computer Programming
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Best in what i do </Typography>
              {/* <Typography component="li">Aspiring indie hacker</Typography> */}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
