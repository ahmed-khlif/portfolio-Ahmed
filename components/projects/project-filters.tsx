"use client";

import { useMemo, useState } from "react";
import { Check, ListFilter, Search, X } from "lucide-react";

import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Projects } from "@/config/projects";

const types = Array.from(new Set(Projects.map((project) => project.type))).sort();
const categories = Array.from(new Set(Projects.flatMap((project) => project.category))).sort();

type FilterValue = "all" | (typeof types)[number];

export function ProjectFilters() {
  const [type, setType] = useState<FilterValue>("all");
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(
    () =>
      Projects.filter((project) => {
        const searchText = query.trim().toLowerCase();
        const matchesType = type === "all" || project.type === type;
        const matchesCategory = !category || project.category.includes(category as never);
        const matchesQuery = !searchText || [project.companyName, project.shortDescription, project.type, ...project.category].join(" ").toLowerCase().includes(searchText);
        return matchesType && matchesCategory && matchesQuery;
      }),
    [category, query, type],
  );

  const hasFilters = type !== "all" || category !== null || query.trim() !== "";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
          <p className="text-sm text-muted-foreground">Filter by focus, then explore the work.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-60">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
              className="h-9 rounded-full pl-9 pr-3"
            />
          </div>
          <Button
            type="button"
            variant={type === "all" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setType("all")}
          >
            All
          </Button>
          {types.map((option) => (
            <Button
              key={option}
              type="button"
              variant={type === option ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setType(option)}
            >
              {option}
            </Button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <ListFilter data-icon="inline-start" />
                {category ?? "Category"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option}
                  checked={category === option}
                  onCheckedChange={(checked) => setCategory(checked ? option : null)}
                >
                  {option}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {hasFilters ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="rounded-full text-muted-foreground"
              onClick={() => {
                setType("all");
                setCategory(null);
                setQuery("");
              }}
            >
              <X data-icon="inline-start" /> Clear
            </Button>
          ) : null}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-8 text-center">
          <Check className="text-muted-foreground" aria-hidden="true" />
          <p className="font-medium">No projects match those filters.</p>
          <Button variant="outline" className="rounded-full" onClick={() => { setType("all"); setCategory(null); }}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
