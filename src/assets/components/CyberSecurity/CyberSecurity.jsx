import React from "react";
import { useNavigate } from "react-router-dom";
import "./CyberSecurity.css";

function CyberSecurity() {
      const navigate = useNavigate();

      const GoBackToHome = () => {
        navigate("/");
      };
  return (
    <>
      <div className="heading">
        <h1 className="tittle">CyberSecurity</h1>
        <button onClick={GoBackToHome}>Go Back To Home</button>
      </div>
      <div className="CyberSecurity">
        <h2>8 Different Types of Cybersecurity and Threats Involved</h2>
        <p>
          &emsp;&emsp;Cybersecurity refers to the protection of devices,
          processes, infrastructure, and assets of the organization from
          cyberattacks, data theft, breaches, unauthorized access, etc. With the
          advent of technology and the increasing interconnectedness of
          organizational systems and networks, effective cybersecurity
          management and strategy are necessary for organizations of all sizes
          and types accordingly. Investments are flowing into this field and the
          market is projected to be a staggering 403 billion US dollars by 2027.
          This in turn has led to a spurt in demand for experts in the field of
          cyber security. Cybersecurity is an umbrella term that encompasses
          different types of security. In this article, we’re trying to
          deconstruct various types of cybersecurity. So let’s dig in.{" "}
        </p>
        <img
          src="https://www.tccd.edu/magazine/assets/images/volume-06/issue-02/cybersecurity/growing-need-header.jpg"
          alt="image"
        />
        <h2>Application Security</h2>
        <p>
          &emsp;&emsp;Application security constitutes the measures and
          countermeasures meant to tackle threats and vulnerabilities that arise
          in the development stage of an application such as design application,
          development, deployment, maintenance, upgrade, etc. It mainly refers
          to the measure implemented in order to prevent the app’s code or data
          from being stolen or hijacked.
        </p>
        <p>
          &emsp;&emsp;There are various hardware, software, and procedures
          deployed to detect as well as mitigate security flaws in the
          application development process. Since 2007, OWASP (The Open Web
          Application Security Project ) has tracked and classified 10 critical
          threats to web application development such as injection, broken
          authentication, cross-site scripting, misconfiguration, and more.{" "}
        </p>
        <h2>Information security</h2>
        <p>
          &emsp;&emsp;nformation security refers to the protection of
          information and data from theft, unauthorized access breaches, etc.
          primarily to uphold user privacy and prevent identity theft.
          Information security is evolving as one of the major requirements in
          businesses worldwide today.
        </p>
        <p>
          &emsp;&emsp;Data is one of the major assets of the Digital Economy, so
          naturally, the protection of data is very very important. Starting
          from big corporate companies to small startups all have started
          investing in information security.
        </p>
        <h2>Disaster Recovery</h2>
        <p>
          &emsp;&emsp;Disaster recovery involves planning and strategizing to
          enable organizations to recover from cyber security / IT disasters.
          The type of cybersecurity includes risk assessment, analysis,
          prioritizing, and establishing disaster response and recovery
          mechanisms in place this enables organizations to recover faster from
          disasters and minimize losses.
        </p>
        <h2>Network Security</h2>
        <p>
          &emsp;&emsp;Network security is a broad concept encompassing a wide
          range of technologies, processes, and devices. In simple terms, it
          constitutes monitoring and preventing authorized access and
          exploitation of the internal networks of an organization by leveraging
          both hardware and software technologies. Today’s network environment
          is complex, with a constantly changing threat environment and hackers
          looking to expose vulnerabilities. This is one of the biggest types of
          cybersecurity that offers great job opportunities across all sectors
          and organizations.
        </p>
        <p>
          &emsp;&emsp;There are various layers It ensures that internal networks
          are safe reliable and usable antivirus and anti-spyware software, VPN,
          IPS, firewall, etc. are used to prevent cyber threats from facing the
          organization
        </p>
        <h2>Website Security</h2>
        <p>
          &emsp;&emsp;Just like the name suggests Website security is used to
          prevent and protect websites from cyber security risks on the
          Internet. The holistic website security programs will cover the
          websites, databases, applications, source codes, and files. There has
          been a steady rise in the number of data breaches on websites in the
          past few years resulting in identity thefts, downtime financial
          losses, loss of reputation and brand image, etc.
        </p>
        <p>
          &emsp;&emsp;The main reason for this has been the misconception among
          website owners that their website is protected by a website hosting
          provider thus leaving them vulnerable to cyber-attacks.{" "}
        </p>
        <h2>Endpoint Security </h2>
        <p>
          &emsp;&emsp;Endpoint security enables organizations to protect their
          servers, workstations, and mobile devices from remote and local cyber
          attacks since devices on a network are interconnected. Primarily used
          to assess all the entry points for threats and vulnerabilities. It
          effectively secures the network by blocking all the attempts made to
          access these entry points via monitoring, file integrity, antivirus
          and anti-malware software, etc.
        </p>
        <h2>Cloud Security </h2>
        <p>
          &emsp;&emsp;Now, Cloud Security is a subset of cybersecurity that
          focuses on ensuring protection for cloud computing systems. It
          includes maintaining Security and data privacy online spanning
          applications, infrastructure, and platforms. Cloud providers like AWS
          or AZURE work together with their clientele, whether individuals, from
          SMEs to big enterprises to prevent the attack by exposing cloud
          vulnerabilities.
        </p>
        <p>
          &emsp;&emsp;As organizations rapidly transition to cloud computing,
          securing the cloud becomes a major priority for companies. An adequate
          cloud security strategy includes cybersecurity solutions, policies,
          controls, and services that assist in preserving an organization’s
          entire cloud deployment. ( Data, Application, infrastructure, etc)
          against attacks.
        </p>
      </div>
    </>
  );
}

export default CyberSecurity
