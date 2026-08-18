"use client";

import { Checkbox } from "@/components/ui/checkbox";
import * as combobox from "@/components/ui/combobox";
import * as field from "@/components/ui/field";
import * as inputGroup from "@/components/ui/input-group";
import * as item from "@/components/ui/item";
import { SearchIcon, Signature, Tag as TagIcon } from "lucide-react";
import Image from "next/image";

interface Author {
  id: string;
  label: string;
  articlesCount: number;
  avatar: string;
}

interface Tag {
  id: string;
  label: string;
}

interface InputsProps {
  authors: Author[];
  tags: Tag[];
}

const Inputs = ({ authors, tags }: InputsProps) => {
  return (
    <div className="space-y-4">
      <inputGroup.InputGroup>
        <inputGroup.InputGroupInput placeholder="Search Articles..." />
        <inputGroup.InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </inputGroup.InputGroupAddon>
      </inputGroup.InputGroup>

      <combobox.Combobox
        itemToStringValue={(author: Author) => author.label}
        items={authors}
      >
        <combobox.ComboboxInput placeholder="Search Authors...">
          <inputGroup.InputGroupAddon>
            <Signature className="text-muted-foreground" />
          </inputGroup.InputGroupAddon>
        </combobox.ComboboxInput>
        <combobox.ComboboxContent>
          <combobox.ComboboxEmpty>No authors found.</combobox.ComboboxEmpty>
          <combobox.ComboboxList>
            {(author: Author) => (
              <combobox.ComboboxItem key={author.id} value={author}>
                <item.Item className="p-0">
                  <item.ItemMedia variant="image">
                    <Image
                      alt={`${author.label}'s avatar`}
                      src={author.avatar}
                      className="object-cover"
                      height={40}
                      width={40}
                    />
                  </item.ItemMedia>

                  <item.ItemContent>
                    <item.ItemTitle className="whitespace-nowrap capitalize">
                      {author.label}
                    </item.ItemTitle>

                    <item.ItemDescription className="text-xs">
                      Articles Count: {author.articlesCount}
                    </item.ItemDescription>
                  </item.ItemContent>
                </item.Item>
              </combobox.ComboboxItem>
            )}
          </combobox.ComboboxList>
        </combobox.ComboboxContent>
      </combobox.Combobox>

      <combobox.Combobox
        itemToStringValue={(tag: Tag) => tag.label}
        items={tags}
      >
        <combobox.ComboboxInput placeholder="Search Tags...">
          <inputGroup.InputGroupAddon>
            <TagIcon className="text-muted-foreground" />
          </inputGroup.InputGroupAddon>
        </combobox.ComboboxInput>
        <combobox.ComboboxContent>
          <combobox.ComboboxEmpty>No tags found.</combobox.ComboboxEmpty>
          <combobox.ComboboxList>
            {(tag: Tag) => (
              <combobox.ComboboxItem key={tag.id} value={tag}>
                <item.Item className="p-0">
                  <item.ItemContent>
                    <item.ItemTitle className="whitespace-nowrap capitalize">
                      {tag.label}
                    </item.ItemTitle>
                  </item.ItemContent>
                </item.Item>
              </combobox.ComboboxItem>
            )}
          </combobox.ComboboxList>
        </combobox.ComboboxContent>
      </combobox.Combobox>

      <field.FieldLabel>
        <field.Field orientation="horizontal">
          <Checkbox name="shouldOrderByAZ" id="shouldOrderByAZ" />
          <field.FieldContent>
            <field.FieldTitle>Order From A-Z</field.FieldTitle>
          </field.FieldContent>
        </field.Field>
      </field.FieldLabel>

      <field.FieldLabel>
        <field.Field orientation="horizontal">
          <Checkbox name="shouldShowOldArticles" id="shouldShowOldArticles" />
          <field.FieldContent>
            <field.FieldTitle>Order By Old Articles</field.FieldTitle>
          </field.FieldContent>
        </field.Field>
      </field.FieldLabel>

      <field.FieldLabel>
        <field.Field orientation="horizontal">
          <Checkbox
            name="shouldShowRecentArticles"
            id="shouldShowRecentArticles"
          />
          <field.FieldContent>
            <field.FieldTitle>Order By Recent Articles</field.FieldTitle>
          </field.FieldContent>
        </field.Field>
      </field.FieldLabel>
    </div>
  );
};

export default Inputs;
