type breadCrumbItems = {
  link?: string;
  title?: string;
  separator?: string;
};

export interface BreadCrumbProps {
  breadCrumbItems: breadCrumbItems[];
}
